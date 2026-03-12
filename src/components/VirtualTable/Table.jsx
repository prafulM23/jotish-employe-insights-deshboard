import { useRef, useState } from "react"

const DataTable = ({ data }) => {
    const boxRef = useRef(null)
    const [scrollTop, setScrollTop] = useState(0)

    const rowHeight = 50
    const boxHeight = 650
    const buffer = 2;

    const onScroll = (e) => {
        setScrollTop(e.currentTarget.scrollTop)
    }

    const startindex = Math.max(0, Math.floor(scrollTop / rowHeight) - buffer)
    const endindex = Math.min(data.length - 1, Math.floor((scrollTop + boxHeight) / rowHeight) + buffer)
    const visiblerow = data.slice(startindex, endindex + 1)
    const paddingTop = startindex * rowHeight;
    const totalHeight = data.length * rowHeight

    return (
        <>
            <div ref={boxRef} onScroll={onScroll} style={{ padding: "5px", background: "white", height: `${boxHeight}px`, width: "90%", margin: "10px auto", overflow: "auto", position: "relative", boxShadow: "2px 2px 7px black" }}>
                <div style={{ height: `${totalHeight}px`, position: "relative" }}>
                    <div style={{ transform: `translateY(${paddingTop}px)` }}>
                        {
                            visiblerow.map((item, i) => (
                                <div key={startindex + i} style={{
                                    height: `${rowHeight}`,
                                    borderBottom: "1px solid black",
                                    display: "flex",
                                    gap: "10px",
                                    padding: "8px 15px",
                                }}>
                                    {
                                        item.map((emply, indx) => (
                                            <p key={indx}>{emply}</p>
                                        ))
                                    }

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataTable