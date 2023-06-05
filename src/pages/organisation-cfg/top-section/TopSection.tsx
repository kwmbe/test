import { Alert, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  reset as adReset,
  isInitial as adIsInitial,
  isValidated as adIsValidated,
  newInitial as adNewInitial,
} from '../../../store/addressSlice';
import {
  reset as cdReset,
  isInitial as cdIsInitial,
  isValidated as cdIsValidated,
  newInitial as cdNewInitial,
} from '../../../store/contactDetailSlice';
import {
  reset as ocReset,
  isInitial as ocIsInitial,
  isValidated as ocIsValidated,
  newInitial as ocNewInitial,
} from '../../../store/organisationConfigSlice';
import { RootState } from '../../../store';
import { useState } from 'react';

const TopSection = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const cd = state.contactDetail;

  const [saved, setSaved] = useState(false);

  const onCancel = () => {
    dispatch(adReset());
    dispatch(cdReset());
    dispatch(ocReset());
  };

  const onSave = () => {
    dispatch(adNewInitial(state.address));
    dispatch(cdNewInitial(state.contactDetail));
    dispatch(ocNewInitial(state.orgConf));

    setSaved(true);
  };

  return (
    <Space direction='horizontal'>
      { 
        (cd.telephone.length != 11 && cd.telephone.length) 
        ? <Alert message='Telephone number is not validated' type='error' /> 
        : <div/>
      }
      <div>
        { (!adIsInitial(state) || !cdIsInitial(state) || !ocIsInitial(state)) &&
          <Button type='text' onClick={onCancel}>Cancel</Button>
        }
        <Button 
          type='primary'
          onClick={onSave}
          disabled={!(adIsValidated(state) && cdIsValidated(state) && ocIsValidated(state)) || saved}
        >
          Save
        </Button>
      </div>
    </Space>
  );
};

export default TopSection;
