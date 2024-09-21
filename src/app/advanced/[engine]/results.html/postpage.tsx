"use server"
import { TestResults } from "@/components/TestResults";
import { TestOutput } from "@/types/TestOutput";
import RootLayout from "@/app/layout";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestInput } from "@/types/TestInput";


// doesn't have layout
export async function postpage(testOutput: TestOutput) {
    return (
        <>
            <TestResults testOutput={testOutput} />
        </>
    );
}

// ⨯ Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
export async function bad500_2(testOutput: TestOutput) {
    return (
        <RootLayout>
            <TestResults testOutput={testOutput} />
        </RootLayout>
    );
}

export async function bad500(testOutput: TestOutput) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <div className="container-lg mt-4">
                    <TestResults testOutput={testOutput} />
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