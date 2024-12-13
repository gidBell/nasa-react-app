export default function SideBar(props) {
    const { handleToggleModal, data } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverLay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="discriptionContainer">
                    <p className="descriptionTitle">Description</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
} 
