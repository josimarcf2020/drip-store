import '../styles/Section.css';

/*
    title: String,
    align: String, // "left", "center"
    children: [
        { 
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
            link: "https://example.com" 
        },
    ]
*/

export const Section = ({ title, align, children }) => {
    return (
        <>
            <div className="sectionTitle" style={{ textAlign: align }}>
                <p id='title'><strong>{title}</strong></p>
            </div>
            <div className="sectionContent">
                {children.map((child, index) => {
                    if (child.link) {
                        return <a href={child.link} key={index}><p>{child.text}</p></a>
                    } else {
                        return <p key={index}>{child.text}</p>
                    }
                })}
            </div>
        </>
    )
}