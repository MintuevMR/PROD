import { classNames } from 'shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames('', {}, [className])}>
            Profile
        </div>
    </DynamicModuleLoader>
);

export default ProfilePage;
