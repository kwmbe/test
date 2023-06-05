import { Card, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cityReducer, countryReducer, isInitial, pCodeReducer, stNameReducer, stNrReducer } from '../../../../store/addressSlice';
import { RootState } from '../../../../store';
import { statusHelper } from '../../../../helper';

const AddressCard = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const ad = state.address;

  const hasBeenTouched = !isInitial(state)

  const [stNr, setStNr] = useState("");
  const [pCode, setPCode] = useState("");

  useEffect(() => {
    if(/^-?\d*(\.\d*)?$/.test(stNr))
      dispatch(stNrReducer(+stNr));
  }, [stNr]);

  useEffect(() => {
    if(/^-?\d*(\.\d*)?$/.test(pCode))
      dispatch(pCodeReducer(+pCode));
  }, [pCode]);

  return (
    <Card title='Address'>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em'
      }}>
        <Input 
          status={statusHelper(ad.streetName, hasBeenTouched)}
          placeholder='Street name' 
          value={ad.streetName} 
          onChange={({target}) => dispatch(stNameReducer(target.value))}
        />
        <Input 
          status={statusHelper(ad.streetNumber, hasBeenTouched)}
          placeholder='Street number'
          value={stNr ? ad.streetNumber : stNr} 
          onChange={({target}) => setStNr(target.value)}
        />
        <Input 
          status={statusHelper(ad.postalCode, hasBeenTouched)}
          placeholder='Postal code'
          value={pCode ? ad.postalCode: pCode} 
          onChange={({target}) => setPCode(target.value)}
        />
        <Input 
          status={statusHelper(ad.city, hasBeenTouched)}
          placeholder='City'
          value={ad.city} 
          onChange={({target}) => dispatch(cityReducer(target.value))}
        />
        <Input 
          status={statusHelper(ad.country, hasBeenTouched)}
          placeholder='Country'
          value={ad.country} 
          onChange={({target}) => dispatch(countryReducer(target.value))}
        />
      </div>
    </Card>
  );
};

export default AddressCard;
