import { Card, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  emailReducer,
  isInitial,
  telReducer,
  websiteReducer,
} from '../../../../store/contactDetailSlice';
import { RootState } from '../../../../store';
import { statusHelper } from '../../../../helper';

const ContactDetailsCard = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const cd = state.contactDetail;

  const hasBeenTouched = !isInitial(state)
  
  return (
    <Card title='Contact Details'>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em'
      }}>
        <Input 
          status={statusHelper(cd.emailAddress, hasBeenTouched)}
          placeholder='Email' 
          value={cd.emailAddress} 
          onChange={({target}) => dispatch(emailReducer(target.value))}
        />
        <Input 
          status={hasBeenTouched ? cd.telephone && cd.telephone.length == 11 ? "" : "error" : ""}
          placeholder='Telephone Number'
          value={cd.telephone} 
          onChange={({target}) => dispatch(telReducer(target.value.substring(0, 11)))}
        />
        <Input 
          status={statusHelper(cd.website, hasBeenTouched)}
          placeholder='Website Address'
          value={cd.website} 
          onChange={({target}) => dispatch(websiteReducer(target.value))}
        />
      </div>
    </Card>
  );
};

export default ContactDetailsCard;
