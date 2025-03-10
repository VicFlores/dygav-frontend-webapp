import React, { useState, useEffect } from 'react';
import styles from './NotificationSettings.module.css';
import { crmFinanzas } from '@/app/utils/axiosConfig/crmFinanzas';
import { FaBuilding } from 'react-icons/fa';

interface NotificationSettingsProps {
  accommodations: any[];
  ownerId: number;
  dictionary: any;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  accommodations,
  ownerId,
  dictionary,
}) => {
  const [notifiedAccommodations, setNotifiedAccommodations] = useState<
    number[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the list of accommodations for which this owner is subscribed
  useEffect(() => {
    const fetchNotificationSettings = async () => {
      try {
        const subscribedAccommodations: number[] = [];

        // Get notification status for each accommodation
        await Promise.all(
          accommodations.map(async (accommodation) => {
            try {
              const response = await crmFinanzas.get(
                `/accommodation/notify_owner/${accommodation.accomodationid}`
              );
              const subscribers = response.data.data || [];

              // Check if the current owner is in the subscribers list
              const isSubscribed = subscribers.some(
                (subscriber: any) => subscriber.owner_id === ownerId
              );

              if (isSubscribed) {
                subscribedAccommodations.push(accommodation.accomodationid);
              }
            } catch (error) {
              console.error(
                `Error checking notification status for ${accommodation.name}:`,
                error
              );
            }
          })
        );

        setNotifiedAccommodations(subscribedAccommodations);
      } catch (error) {
        console.error('Error fetching notification settings:', error);
      }
    };

    if (accommodations.length > 0 && ownerId) {
      fetchNotificationSettings();
    }
  }, [accommodations, ownerId]);

  const handleToggleNotification = async (accommodationId: number) => {
    setIsLoading(true);

    try {
      if (notifiedAccommodations.includes(accommodationId)) {
        // Unsubscribe
        await crmFinanzas.delete(`/accommodation/notify_owner/${ownerId}`);
        setNotifiedAccommodations((prev) =>
          prev.filter((id) => id !== accommodationId)
        );
      } else {
        // Subscribe
        await crmFinanzas.post('/accommodation/notify_owner', {
          accommodation_id: accommodationId,
          owner_id: ownerId,
        });
        setNotifiedAccommodations((prev) => [...prev, accommodationId]);
      }
    } catch (error) {
      console.error('Error toggling notification:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.notificationSettings}>
      <h1 className={styles.title}>
        {dictionary.ownerDashboard?.notificationsTitle ||
          'Preferencia de notificaciones'}
      </h1>
      <p className={styles.subtitle}>
        {dictionary.ownerDashboard?.notificationsSubtitle ||
          '¿Deseas recibir notificaciones de las reservas de tus alojamientos?'}
      </p>

      <div className={styles.notificationsList}>
        {accommodations.map((accommodation) => (
          <div
            key={accommodation.accomodationid}
            className={styles.notificationItem}
          >
            <div className={styles.accommodationInfo}>
              <span className={styles.accommodationName}>
                <FaBuilding className={styles.accommodationIcon} />
                {accommodation.name}
              </span>
            </div>
            <div className={styles.toggleWrapper}>
              <label className={styles.toggle}>
                <input
                  type='checkbox'
                  checked={notifiedAccommodations.includes(
                    accommodation.accomodationid
                  )}
                  onChange={() =>
                    handleToggleNotification(accommodation.accomodationid)
                  }
                  disabled={isLoading}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;
