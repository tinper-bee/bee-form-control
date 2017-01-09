/**
 * @title 常用三种尺寸 Input
 * @description 
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="demo-form-control">
				<FormControl placeholder="Enter text" size="sm"/>	
				<FormControl placeholder="Enter text"/>	
				<FormControl placeholder="Enter text" size="lg"/>			
			</div>
		)
	}
}