import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // The document ID of the intro page
      label: 'Introduction', // The label to display in the sidebar
    },
    {
      type: 'category',
      label: 'Roles',
      collapsed: false,
      collapsible: false,
      items: [
        'roles/toastmaster',
        'roles/speaker',
        'roles/evaluator',
        'roles/general-evaluator',
        'roles/table-topics-master',
        'roles/grammarian',
        'roles/timer',
        'roles/ah-counter',
        'roles/ballot-counter',
      ],
    },
    {
      type: 'category',
      label: 'Officers',
      collapsed: false,
      collapsible: false,
      items: [
        'officer/president',
        'officer/vpe',
        'officer/vpm',
        'officer/vppr',
        'officer/saa',
        'officer/secretary',
        'officer/treasurer',
      ],
    },
    {
      type: 'category',
      label: 'Others',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'autogenerated', dirName: 'others' }
      ],
    },
  ],
};

export default sidebars;
