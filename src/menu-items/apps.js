// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = {
    IconDashboard
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'apps',
    title: 'Apps',
    caption: 'Apps Caption',
    type: 'group',
    children: [
        {
            id: 'csvtojson',
            title: 'Converter',
            type: 'item',
            url: '/dashboard/apps/converter',
            breadcrumbs: false,
            icon: icons.IconDashboard
        }
    ]
};

export default pages;
