import VmapTop from '../components/Top';
import VmapAbout from '../components/About';
import VmapNotFound from '../components/NotFound';

export default [
    { path: '/', component: VmapTop },
    { path: '/about', component: VmapAbout },
    { path: '*', component: VmapNotFound }
];
