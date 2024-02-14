import { AppBackground } from '@/components';
import { Drawer } from '@/features/Drawer';
import { IconSelector } from '@/features/IconSelector';
import { OptionSetting } from '@/features/OptionSetting';

export const MainLayout = () => {

    return <div
        className="flex-x-center h-full w-full mt-10"
    >
        <AppBackground />
        <div className='flex-x-center w-[1050px]'>
            <div className="flex-1 mr-4">
                <IconSelector />
            </div>
            <div>
                <Drawer />
            </div>
            <div className='flex-1 ml-4'>
                <OptionSetting />
            </div>
        </div>

    </div >
}