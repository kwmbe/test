import { Card, Checkbox, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import {
  CANReducer,
  VANReducer,
  bAccReducer,
  codeReducer,
  descReducer,
  isInitial,
  migReducer,
} from '../../../../store/organisationConfigSlice';
import { RootState } from '../../../../store';
import { statusHelper } from '../../../../helper';

const OrganizationDetailsCard = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const oc = state.orgConf;

  const hasBeenTouched = !isInitial(state)

  return (
    <Card title='Organization Details' >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em'
      }}>
        <Checkbox
          checked={oc.migrationMode}
          onChange={({target}) => dispatch(migReducer(target.checked))}
        >
          Migration mode
        </Checkbox>
        <Input 
          status={statusHelper(oc.code, hasBeenTouched)}
          placeholder='Code'
          value={oc.code} 
          onChange={({target}) => dispatch(codeReducer(target.value))}
        />
        <Input 
          status={statusHelper(oc.description, hasBeenTouched)}
          placeholder='Description'
          value={oc.description} 
          onChange={({target}) => dispatch(descReducer(target.value))}
        />
        <Input 
          status={statusHelper(oc.bankAccount, hasBeenTouched)}
          placeholder='Bank Account' 
          value={oc.bankAccount} 
          onChange={({target}) => dispatch(bAccReducer(target.value))}
        />
        <Input 
          status={statusHelper(oc.vatAccountNumber, hasBeenTouched)}
          placeholder='Account Number'
          value={oc.vatAccountNumber} 
          onChange={({target}) => dispatch(VANReducer(target.value))}
        />
        <Input 
          status={statusHelper(oc.companyAccountNumber, hasBeenTouched)}
          placeholder='Company Account Number'
          value={oc.companyAccountNumber} 
          onChange={({target}) => dispatch(CANReducer(target.value))}
        />
      </div>
    </Card>
  );
};

export default OrganizationDetailsCard;
