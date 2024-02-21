import styled from 'styled-components';
import ImageBanner from '../../assets/image/Banner-one.jpg'

function Banner(props){
    return (
        <div>
            <SliderContent>
                <div><img src={ImageBanner} className='banner' alt=''/></div>
            </SliderContent>
        </div>
    )
}

export default Banner 

const SliderContent = styled.div`
    margin-top: 100px;
    img{
        width: 100%;
    }
`

