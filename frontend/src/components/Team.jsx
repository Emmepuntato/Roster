export default function Team({ minPlayer }) {
  const player = Object.keys(minPlayer).lenght
  const rows = {
    1: 'grid-rows-1',
    2: 'grid-rows-2',
    3: 'grid-rows-3',
    4: 'grid-rows-4',
    5: 'grid-rows-5',
    6: 'grid-rows-6',
    7: 'grid-rows-7',
    8: 'grid-rows-8',
  }
  /* Create an object con team class
collect its properties and store them as keys of the object
the values will be dynamic and will be taken from 
the arrey of the active/present players
 */
  return (
    <div className={`border min-w-50 min-h-50 grid ${rows[player]} `}>
      {Array.from({ length: minPlayer }, (_, i) => (
        <div key={i} className='border min-w-5 min-h-5'>
          Player {i + 1}
        </div>
      ))}
    </div>
  )
}
