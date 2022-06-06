// assets
import { IconCone } from '@tabler/icons';

// constant
const icons = {
    IconCone
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
            icon: icons.IconCone
        }
    ]
};

export default pages;
