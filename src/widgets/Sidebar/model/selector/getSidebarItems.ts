import { StateSchema } from 'app/providers/StoreProvider';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';

const authData = (state: StateSchema) => state.user.authData;
export const getSidebarItems = createSelector(
    authData,
    (authData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
            {
                path: `${RoutePath.profile}${authData?.id ?? ''}`,
                Icon: MainIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: MainIcon,
                text: 'Статьи',
                authOnly: true,
            },
        ];

        return sidebarItemsList;
    },
);
