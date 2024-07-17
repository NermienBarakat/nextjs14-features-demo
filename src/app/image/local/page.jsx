import Image from "next/image";
import Logo from '@/images/FileSpark-logo.jpg';

export default function Local() {
    return (
        <main className="flex flex-col gap-y-4 mx-auto  max-w-2xl items-center justify-between p-24">
            <Image src={Logo} alt='File Spark io' placeholder="blur" quality={100} />
            <h1 className="text-2xl font-bold">workflow for showing a blur effect for local images while they load, and testing it under low internet speed conditions:</h1>
            <ul className="list-disc list-inside">
                <li>Import Image from next/image</li>
                <li>Import the image from its location</li>
                <li>The Next.js Image component automatically handles width and height.</li>
                <li>Use blur in placeholder</li>
                <li>To test in the browser, enable Network Throttling:
                    <ul className="list-disc list-insid">
                        <li>Open Developer Tools (`Ctrl+Shift+I` or `Cmd+Option+I`)</li>
                        <li>Go to the "Network" tab</li>
                        <li>Click on the "Throttling" dropdown and select a slower network speed, such as "Slow 3G"</li>
                    </ul>
                </li>
            </ul>

        </main>
    );
}
