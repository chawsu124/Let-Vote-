import React, { useState } from "react"
import './App.css'
import { Table, Form, Input, Button, Card, Layout } from 'antd'
const Job = () => {
    let jobs = [
        {
            id: 1,
            code: '01',
            name: 'engineer',
            description: 'testing',
            date_published: '2020-07-15 10:39:13',
            job_start_date: '2020-07-15 10:39:13',
            no_of_vacancies: 5
        },
        {
            id: 2,
            code: '02',
            name: 'manager',
            description: 'testing',
            date_published: '2018-07-15 10:39:13',
            job_start_date: '2018-07-15 10:39:13',
            no_of_vacancies: 3
        },
        {
            id: 3,
            code: '03',
            name: 'designer',
            description: 'testing',
            date_published: '2017-07-15 10:39:13',
            job_start_date: '2017-07-15 10:39:13',
            no_of_vacancies: 5
        }
    ]
    let columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        }
        ,
        {
            title: 'Date_Published',
            dataIndex: 'date_published',
            key: 'date_published'
        },
        {
            title: 'Job_Start_Date',
            dataIndex: 'job_start_date',
            key: 'job_start_date'
        },
        {
            title: 'No_Of_Vacancies',
            dataIndex: 'no_of_vacancies',
            key: 'no_of_vacancies'
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x'
        }
    ]

    const [data, setData] = useState(jobs)
    const [item, setItem] = useState({})

    const remove = (id) => {
        let joblists = data.filter((item) => item.id != id)
        setData(joblists)
    }

    const detail = (id) => {
        let job = data.filter((item) => item.id == id)
        const { code, name, description, date_published, job_start_date, no_of_vacancies } = job[0]
        let result = `${code} ${name} ${description} ${date_published} ${job_start_date} ${no_of_vacancies}`
        alert(result)
    }

    const edit = (id) => {
        let job = data.filter((item) => item.id == id)
        setItem(job[0])
    }

    const handleSubmit = (e) => {
        if (item.id) {
            let result = data.map((res) => {
                if (res.id == item.id) {
                    return item
                }
                return res
            })
            setData(result, "result")
        }
        else {
           setData(
               [
                   ...data,
                   {
                       ...item, id: data.length+1
                   }
               ]
           )
            }
        e.preventDefault();
    }

    const handleChange = (e) => {
          item[e.target.name] = e.target.value;
        setItem(item)
    }

    const Layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 10 }
    }

    return <Card>
        <div>

            <div>
                <Form
                    {...Layout}
                    onFinish={handleSubmit}
                >
                    <Form.Item label="Code" name="code" onChange={handleChange} defaultValue={item.code}>
                        <Input />                  
                    </Form.Item>
                    <Form.Item label="Name" name="name" onChange={handleChange} defaultValue={item.name}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description" onChange={handleChange} defaultValue={item.description}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Date_Published" name="date_published" onChange={handleChange} defaultValue={item.date_published}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Job_Start_Date" name="job_start_date" onChange={handleChange} defaultValue={item.job_start_date}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="No_Of_Vacancies" name="no_of_vacancies" onChange={handleChange} defaultValue={item.no_of_vacancies}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
                {/* <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleChange} defaultValue={item.name} /><br />

            <label>Year</label>
            <input type="text" name="year" onChange={handleChange} defaultValue={item.year} /><br />

            <label>Major</label>
            <input type="text" name="major" onChange={handleChange} defaultValue={item.major} /><br />
            <button type="submit">Submit</button>

        </form> */}
            </div>
            <br />
            <br />
            <Table dataSource={data} columns={columns} />
        </div>
    </Card>
}
export default Job;

