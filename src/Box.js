import './Box.css'

const Box = ({width, height, backgroundColor}) => (
    <div data-testid="box" className='Box' style={{"width": width, "height": height, "backgroundColor": backgroundColor}}>

    </div>
)

export default Box;