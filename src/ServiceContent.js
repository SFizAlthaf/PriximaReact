function ServiceContent({serviceTitle, serviceDesc}) {
    return (
        <div>
            <h4 className="serviceTitle">{serviceTitle}</h4>
            <p className="serviceDesc">{serviceDesc}</p>
        </div>
    )
}

export default ServiceContent;