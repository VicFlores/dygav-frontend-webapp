import axios from 'axios';
import { crmFinanzas } from '../axiosConfig/crmFinanzas';
import { validateAccessToken } from './authFetcher';

export const getOwnerInfo = async (accessToken: string) => {
  try {
    const getUserByAcessToken = await validateAccessToken(accessToken);

    const user = await getUserByAcessToken.json();

    const getOwenerById = await crmFinanzas.get(`/owner/${user.data.id}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return getOwenerById.data;
  } catch (error) {
    console.error('Error fetching getUserByAcessToken', error);
    throw error;
  }
};

export const getOwnerAccommodations = async (accessToken: string) => {
  try {
    const getOwner = await getOwnerInfo(accessToken);

    const getOwnerAccommodations = await crmFinanzas.get(
      `/accommodation/owner/${getOwner.OWNERID}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return getOwnerAccommodations.data.data;
  } catch (error) {
    console.error('Error fetching getOwnerAccommodations', error);
    throw error;
  }
};
