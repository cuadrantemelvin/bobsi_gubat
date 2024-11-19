<?php

namespace App\Http\Controllers;

use App\Models\Barangay;
use Inertia\Inertia;

class BarangayController extends Controller
{
    public function index()
    {
        // Fetch all barangays from the database
        $barangays = Barangay::all();

        // Return the Inertia response with the barangays data
        return Inertia::render('Barangays/Barangay', [
            'barangays' => $barangays
        ]);
    }
}
