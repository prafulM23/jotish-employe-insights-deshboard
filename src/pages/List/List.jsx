import axios from "axios";
import { useEffect, useState } from "react"
import DataTable from "../../components/VirtualTable/Table";

const List = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await axios.post("https://backend.jotish.in/backend_dev/gettabledata.php", {
                username: "test",
                password: "123456"

            });
            setData(res.data.TABLE_DATA.data)
            console.log(res.data.TABLE_DATA.data)
        }
        getData()
    }, [])

    return (
        <>
            <h1>Employe Data List</h1>
            <DataTable data={data} />
        </>
    )
}

export default List