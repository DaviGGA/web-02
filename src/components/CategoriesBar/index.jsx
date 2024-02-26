import './style.css'

export function CategoriesBar() {
    return (
        <div className='categories-list'>
            <p className='categories-text'>Categorias</p>

            <div className='list'>
                <p className='list-item'>Back-end</p>
                <p className='list-item'>Front-end</p>
                <p className='list-item'>Ciência de Dados</p>
                <p className='list-item'>Cibersegurança</p>
                <p className='list-item'>Programação de sistemas</p>
                <p className='list-item'>Devops</p>
            </div>
        </div>
    )
}