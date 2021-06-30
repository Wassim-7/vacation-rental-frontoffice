import React, { useState, useEffect } from 'react'
import { Card, Button, Modal } from 'antd';
import { ScheduleOutlined } from '@ant-design/icons';

import defaultHomeImage from '../../assets/images/defaultHomeImage.jpg'
import BookingModalContent from './components/BookingModalContent'
import axios from '../../config/axios'

function Home() {

  const [homeList, setHomeList] = useState([])
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);

  useEffect(async () => {
    const response = await axios.get('/homes')
    setHomeList(response.data)
  }, [])

  const showBookingModal = () => {
    setIsBookingModalVisible(true);
  }

  const handleCancelBookingModal = () => {
    setIsBookingModalVisible(false);
  }

  const handleBookingAction = async (values) => {
    const fromDate = values.period[0].format("DD/MM/YYYY")
    const toDate = values.period[1].format("DD/MM/YYYY")
    values.period = fromDate + ' - ' + toDate

    console.log(values);

    const response = await axios.post('/reservation', values)
    setIsBookingModalVisible(false);
  }


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      {homeList.map(home => {
        return (
          <Card
            hoverable
            style={{ width: 300, margin: 15 }}
            cover={<img alt="example" style={{
              maxHeight: '300px',
              maxWidth: '300px',
              height: 'auto',
              width: 'auto',
              margin: 'auto'
            }} src={home.photos[0] || defaultHomeImage} />}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{home.region + " " + home.type}</h3>
              <h3>{home.price} DT</h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Ref: {home.referance}</h4>
              <Button type="primary" size="small" icon={<ScheduleOutlined />} onClick={showBookingModal}>Book</Button>
            </div>
          </Card>
        )
      })}

      <Modal title="Booking modal" visible={isBookingModalVisible} footer={null} onCancel={handleCancelBookingModal}>
        <BookingModalContent onSubmit={(values) => { handleBookingAction(values) }} onCancel={handleCancelBookingModal} />
      </Modal>
    </div>
  )
}

export default Home
