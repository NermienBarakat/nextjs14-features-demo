import { getPlaiceholder } from 'plaiceholder';

export default async function getBase64(url) {
    try {
        const res = await fetch(url);
        // we need the array buffer as it hold the binary data so we can display that by convert it to base64 and display as the blur effect
        if (!res.ok) throw new Error('Network response was not ok');
        const buffer = await res.arrayBuffer();
        const { base64 } = await getPlaiceholder(Buffer.from(buffer));
        return base64;

    } catch (error) {
        console.error(error.stack);
    }
}