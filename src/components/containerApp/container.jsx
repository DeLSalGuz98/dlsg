import './container.css'
export const Container = ({children})=>{
    return(
        <div className='subcontainer'>
            {children}
        </div>
    )
}