import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Barangay({ barangays }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter barangays based on search term
    const filteredBarangays = barangays.filter((barangay) =>
        barangay.barangay_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Barangays
                </h2>
            }
        >
            <Head title="Barangay" />

            <div className="p-4">
                <h1 className="mb-6 text-center text-2xl font-semibold">
                    Gubat Barangays
                </h1>

                {/* Search Bar */}
                <div className="mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search Barangay..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-md border p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-1/3"
                    />
                </div>

                {/* Barangay Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {filteredBarangays.length > 0 ? (
                        filteredBarangays.map((barangay) => (
                            <div
                                className="rounded-lg border bg-white p-4 text-center shadow-md hover:bg-violet-600 hover:text-white"
                                key={barangay.id}
                            >
                                <h3 className="text-lg font-medium  ">{barangay.barangay_name}</h3>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-600">
                            No Barangays found
                        </p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
