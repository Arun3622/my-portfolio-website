import "./header.css"
function header(){
    return(
        <>
       <nav className="boder">
        <h1 className="headline"> My Resume </h1>
                <div className="butten">
                    <a className="resume" href="#"> Resume  |</a>
                    <a className="project" href="#"> Project |</a>
                  <a className="contact" href="#">Contact </a>
                </div>
             </nav>
        </>
    )
}
export default header