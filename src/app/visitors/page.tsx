export default async function Visitors() {

    const response = await fetch(process.env.URL + '/api/visitors/', { cache: "no-store" })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    const lines = res.data

    return (
        <div>
            <p>{process.cwd()}</p>
            {lines.map((line: any) => (
                <p key={line} className='text-sm'>{line}</p>
            ))}
          
        </div>
      );
}
