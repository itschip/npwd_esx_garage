import { useCallback } from 'react';
import { ServerPromiseResp } from '../types/common';
import fetchNui from '../utils/fetchNui';

export const useAppActions = () => {
  const requestWaypoint = useCallback((parking: string | null, type: string) => {
    fetchNui<ServerPromiseResp<any>>('npwd:esx-garage:requestWaypoint', { parking, type }).then(
      (res) => {
        console.log(res.data);
      },
    );
  }, []);

  return {
    requestWaypoint,
  };
};
