import {
  Box,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  IconButton,
  Collapse,
} from '@mui/material';
import { green, orange } from '@mui/material/colors';
import React, { useState } from 'react';
import { GarageItem } from './types/garage';
import FlightIcon from '@mui/icons-material/Flight';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useAppActions } from './actions/useAppActions';

interface VehicleListProps {
  isDarkMode: boolean;
  vehicles: any;
}

export const VehicleList: React.FC<VehicleListProps> = ({ vehicles, isDarkMode }) => {
  const [collapseId, setCollapseId] = useState<string | null>('car');
  const { requestWaypoint } = useAppActions();
  const typeIcon = {
    car: {
      icon: <DirectionsCarIcon />,
      status: {
        stored: green[500],
        outside: orange[500],
      },
    },
    aircraft: {
      icon: <FlightIcon />,
      status: {
        stored: green[500],
        outside: orange[500],
      },
    },
    boat: {
      icon: <DirectionsBoatIcon />,
      status: {
        stored: green[500],
        outside: orange[500],
      },
    },
    bike: {
      icon: <PedalBikeIcon />,
      status: {
        stored: green[500],
        outside: orange[500],
      },
    },
  };

  const expandItem = (id: string) => {
    setCollapseId(id);
  };

  const handleRequestWaypoint = (parking: string | null, type: string) => {
    requestWaypoint(parking ?? null, type);
  };

  return (
    <Box>
      {Object.keys(vehicles).map((key) => (
        <List
          subheader={
            <ListSubheader sx={{ cursor: 'pointer' }} onClick={() => expandItem(key)}>
              {key.toUpperCase()}
            </ListSubheader>
          }
        >
          <Collapse in={collapseId === key}>
            {vehicles[key].map((veh: GarageItem) => {
              return (
                <ListItem
                  secondaryAction={
                    <IconButton
                      onClick={() => handleRequestWaypoint(veh.parking, veh.type)}
                      disabled={!veh.stored}
                    >
                      <LocationOnIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primaryTypographyProps={{
                      color: isDarkMode ? '#fff' : '#000',
                      fontWeight: 'bold',
                    }}
                    primary={veh.plate}
                    secondary={veh.stored ? veh.parking : 'Outside'}
                  />
                  <ListItemIcon
                    sx={{ color: typeIcon[veh.type].status[veh.stored ? 'stored' : 'outside'] }}
                  >
                    {typeIcon[veh.type].icon}
                  </ListItemIcon>
                </ListItem>
              );
            })}
          </Collapse>
        </List>
      ))}
    </Box>
  );
};
