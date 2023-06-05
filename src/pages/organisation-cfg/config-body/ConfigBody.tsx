import { Col, Row } from 'antd';

import AddressCard from './cards/AddressCard';
import ContactDetailsCard from './cards/ContactDetailsCard';
import OrganizationDetailsCard from './cards/OrganizationDetailsCard';

const ConfigBody = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <OrganizationDetailsCard />
      </Col>
      <Col span={8}>
        <ContactDetailsCard />
      </Col>
      <Col span={8}>
        <AddressCard />
      </Col>
    </Row>
  );
};

export default ConfigBody;
