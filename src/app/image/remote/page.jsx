import Image from 'next/image';
import getBase64 from '@/components/get-base64';
export default async function RemoteImage() {
    const remoteImage = 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const blurDataURL = await getBase64(remoteImage);
    console.log(blurDataURL);
    return (
        <main className="flex flex-col gap-y-4 mx-auto  max-w-2xl items-center justify-between p-24">
            <Image src={remoteImage} alt="Remote Image" width={1136} height={640} placeholder='blur' blurDataURL={blurDataURL} />
            <h1 className="text-2xl font-bold">workflow for showing a blur effect for remote images while they load:</h1>
            <ul className="list-disc list-inside">
                <li>Use the Image component from next/image</li>
                <li>Use the src attribute to fetch the image from a remote URL</li>
                <li>Test the blur effect by throttling the network speed in the browser</li>
                <li>we need to provied the blue data for the image to do that</li>
                <li>For dynamic images, you must provide the blurDataURL property. Solutions such as Plaiceholder can help with base64 generation.</li>
                <li>Update next.js config with the image domain name </li>
                <li>You need both placeholder and </li>
            </ul>
        </main>
    );
    // Function body goes here

}