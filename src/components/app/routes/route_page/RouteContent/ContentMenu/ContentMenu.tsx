
import { 
    MessagesSquare,
    Users
} from 'lucide-react';
import type {
    LucideIcon
} from 'lucide-react'
import { TabId } from '@/lib/types/types';

interface IContentMenuProps {
    handleSetTab: (tabId: TabId) => void
}

interface ITab {
    id: TabId;
    icon: LucideIcon;
}

type Tabs = ITab[]

const tabs : Tabs = [
    {id: "chat", icon: MessagesSquare},
    {id: "members", icon: Users},
]

export default function ContentMenu (props: IContentMenuProps) {

    const {
        handleSetTab
    } = props

    return (
        <>
            <div
                className='flex border-b-2 border-background-secondary items-center gap-x-3 py-2 px-3'
            >   
                {
                    tabs.map(({id, icon: Icon}) => {
                        return (
                            <MenuItem
                                key={id}
                                id={id}
                                Icon={Icon}
                                handleSetTab={handleSetTab}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

interface IMenuItemProps extends IContentMenuProps {
    Icon: LucideIcon;
    id: TabId;
}

function MenuItem (props: IMenuItemProps) {

    const {
        id,
        Icon,
        handleSetTab
    } = props

    return (
        <>
            <div
                className='flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-115'
                onClick={() => handleSetTab(id)}
            >
                <Icon
                    size={32}
                />
            </div>
        </>
    )
}