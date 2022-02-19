console.log("Hello World");

const main = async () => {
    const supabaseUrl = 'https://jebiwvlssrtnvtxlgncm.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzUyMjg4OCwiZXhwIjoxOTU5MDk4ODg4fQ.28Be0hzH5THtt7Jjd0jY45Hrt741D68T2jZke6O0Mvc'
    const client = supabase.createClient(supabaseUrl, supabaseKey)
    console.log(client);
    //SELECT prefecture, city from whereiam ORDER BY created_at desc LIMIT 1;  
    let { data: whereiam, error } = await client
        .from('whereiam')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
    console.log(whereiam);
    const place = whereiam[0]
    const msg = `${place.prefecture}${place.city}に滞在中です`
    document.querySelector("#msg").innerText = msg

}

main();
