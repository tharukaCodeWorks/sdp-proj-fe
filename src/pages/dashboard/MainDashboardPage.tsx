import React, { FC } from 'react';
import { Drawer, AppBar, Toolbar, List, ListItem, ListItemIcon, ListItemText, Typography, Box, Breadcrumbs, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { SystemUserLayout } from '../../components/layouts/sys-user-layout/SystemUserLayout';

const drawerWidth = 240;

export const MainDashboardPage:FC=()=> {
  return (
    <SystemUserLayout pageTitle={'Home'}>
      Hello
    </SystemUserLayout>
  );
}

