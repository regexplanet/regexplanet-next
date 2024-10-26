"use server"
import { TestResults } from "@/components/TestResults";
import { type TestInput, type TestOutput } from "@regexplanet/common";
import RootLayout from "@/app/layout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


// doesn't have layout
export async function postpage(testOutput: TestOutput) {
    return (
        <>
            <TestResults onClear={() => {}} testOutput={testOutput} />
        </>
    );
}

// ⨯ Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
export async function bad500_2(testOutput: TestOutput) {
    return (
        <RootLayout>
            <TestResults onClear={() => { }} testOutput={testOutput} />
        </RootLayout>
    );
}

export async function bad500(testOutput: TestOutput) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="container-lg mt-4">
                    <TestResults onClear={() => { }} testOutput={testOutput} />
                </div>
                <Footer />
            </body>
        </html>

    );
}

export async function renderPageSimple(
    engine: string,
    method: string,
    testInput: TestInput,
    testOutput: TestOutput
) {
    return `${engine} ${method} input=${JSON.stringify(
        testInput
    )} output=${JSON.stringify(testOutput)}`;
}