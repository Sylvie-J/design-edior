import { Delta } from '@/app/libs/design-core';
import { FC, PropsWithChildren } from 'react';
interface SubMenuProps {
    transform: Delta;
}
declare const SubMenu: FC<PropsWithChildren<SubMenuProps>>;
export default SubMenu;
