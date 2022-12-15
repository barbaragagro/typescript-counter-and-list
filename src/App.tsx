import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

function App() {
  
  return (
    <div>
     <Heading title={'TypeScript Website'}/>
     <Section title={'Made with TypeScript and React'}>Just for practice</Section>
     <Counter></Counter>
     <List items={['listitem1', 'listitem2', 'listitem3','listitem4']} render={(item:string)=><span className="gold">{item}</span>}></List>
    </div>
  )
}

export default App
