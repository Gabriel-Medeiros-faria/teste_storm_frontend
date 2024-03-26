import { render } from "@testing-library/react"
import App from "../App"

describe('Render App Component', ()=>{
    it('should display element,', ()=> {
        render(<App/>)
    })
})