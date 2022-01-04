import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Col, Row } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons'

import getConfig from 'next/config'
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(serverRuntimeConfig)
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig)

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Row justify="center" align='top'>
            <Col span={24} xxl={6}>
              Welcome to
            </Col>
            <Col span={24} xxl={8}>
              <Row justify="center" >
                <Col span={2} >
                  <CaretRightOutlined />
                </Col>
                <Col span={20}>
                  <Link href="/home">Aka World!</Link>
                </Col>
                <Col span={2}>
                  <CaretLeftOutlined />
                </Col>
              </Row>
            </Col>
          </Row>
        </h1>
      </main>
    </div>
  )
}

export default Home
