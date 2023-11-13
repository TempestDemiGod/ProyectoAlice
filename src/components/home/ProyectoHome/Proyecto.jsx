import { Link } from 'react-router-dom'
export const HomeProject = () =>{
    return(
        <>
            <Link type="button" to="/brainstorming" className="btn btn-outline-primary">brainstorming</Link>
            <button type="button" className="btn btn-outline-primary" disabled>afinidad</button>
            <button type="button" className="btn btn-outline-primary" disabled>impacto</button>
            <button type="button" className="btn btn-outline-primary" disabled>empatia</button>
            <button type="button"  className="btn btn-outline-primary" disabled>otro</button>
        </>
    )
}