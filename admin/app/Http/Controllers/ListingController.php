<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json('ok', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Listing $listing)
    {
        return response()->json($listing);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'roomName' => 'required',
            'services' => 'required',
            'files' => 'nullable|array', // Modify the validation rule for 'files'
            'files.*' => 'file|mimes:jpeg,png,pdf,docs|max:5000', // Add validation rule for each file
            'maxPersons' => 'required',
            'view' => 'required',
            'bed' => 'required',
            'price' => 'required',
            'description' => 'required',
        ]);

        // Process file uploads
        if ($request->hasFile('files')) {
            $uploadedFiles = [];
            foreach ($request->file('files') as $file) {
                $uploadedFiles[] = $file->store('file', 'public');
            }
            $formFields['files'] = json_encode($uploadedFiles);
        } else {
            $formFields['files'] = null;
        }

        $formFields['user_id'] = auth()->id();

        $listing = Listing::create($formFields);

        return response()->json($listing, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $formFields = $request->validate([
            'roomName' => 'required',
            'services' => 'required',
            'files' => 'nullable|array', // Modify the validation rule for 'files'
            'files.*' => 'file|mimes:jpeg,png,pdf,docs|max:5000', // Add validation rule for each file
            'maxPersons' => 'required',
            'view' => 'required',
            'bed' => 'required',
            'price' => 'required',
            'description' => 'required',
        ]);

        $user = Listing::find($id);

        if (!$user) {
            return response()->json(['Error' => 'Listing not found'], 404);
        }

        $user->update($formFields);

        return response()->json(['Success' => 'Listing updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Listing $listing)
    {
        $listing->delete();

        return response()->json(['Success' => 'Listing deleted successfully'], 200);
    }
}
