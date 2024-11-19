import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function CommunityNews() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null); // state to store the file

    // This function will handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object to handle file upload with other form data
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);

        if (file) {
            formData.append('file', file);
        }

        // Add your logic here to handle the form submission, e.g., API call
        // Example using fetch to send data
        try {
            const response = await fetch('/api/community-news', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('News created successfully');
                // Reset form fields after submission
                setTitle('');
                setContent('');
                setFile(null);
            } else {
                console.error('Failed to create news');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Community News
                </h2>
            }
        >
            <Head title="Community News" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white p-6 shadow-lg">
                        <h3 className="mb-4 text-lg font-semibold">
                            Create Post
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    News Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="content"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    News Content
                                </label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    rows="4"
                                    required
                                />
                            </div>

                            {/* File Upload Section */}
                            <div className="mb-4">
                                <label
                                    htmlFor="file"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Upload Image or Video
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept="image/*,video/*" // Allow image and video files
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Create News
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
