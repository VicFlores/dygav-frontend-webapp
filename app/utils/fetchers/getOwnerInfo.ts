'use server';

import { cookies } from 'next/headers';
import { crmFinanzas } from '../axiosConfig/crmFinanzas';
import { validateAccessToken } from './authFetcher';
import { verifyTokens } from '../axiosConfig';

verifyTokens();

export const getOwnerInfo = async () => {
  try {
    const accessToken = cookies().get('access_token');

    const getUserByAcessToken = await validateAccessToken(
      accessToken?.value as string
    );

    const user = await getUserByAcessToken.json();

    const getUserInfo = await crmFinanzas.get(
      `/auth/user?email_username=${user.data.email}`
    );

    return {
      ...getUserInfo.data.data,
      access_token: accessToken,
    };
  } catch (error) {
    console.error('Error fetching getUserByAcessToken', error);
    throw error;
  }
};

export const getOwnerAccommodations = async () => {
  try {
    const getOwner = await getOwnerInfo();

    const ownerInfo = await crmFinanzas.get(`/owner/${getOwner.userid}/user`, {
      headers: {
        Authorization: `Bearer ${getOwner.access_token}`,
      },
    });

    const getOwnerAccommodations = await crmFinanzas.get(
      `/accommodation/owner/${ownerInfo.data.data.OWNERID}`
    );

    return getOwnerAccommodations.data.data;
  } catch (error) {
    console.error('Error fetching getOwnerAccommodations', error);
    throw error;
  }
};

export const getAccommodationsInfo = async (avaibookId: number) => {
  try {
    const { data } = await crmFinanzas.get(
      `/accommodation/${avaibookId}/aviabook`
    );

    const accommodationByCrm = await crmFinanzas.get(
      `/accommodation/${data.data.aviabook_id}`
    );

    return accommodationByCrm.data.data;
  } catch (error) {
    console.error('Error fetching getOwnerAccommodations', error);
    throw error;
  }
};
