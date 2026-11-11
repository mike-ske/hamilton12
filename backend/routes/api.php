<?php
use App\Http\Controllers\CareerController;use App\Http\Middleware\AdminTokenAuth;use Illuminate\Support\Facades\Route;
Route::post('/applications',[CareerController::class,'apply'])->middleware('throttle:10,1');
Route::post('/contact',[CareerController::class,'contact'])->middleware('throttle:10,1');
Route::post('/donation-interests',[CareerController::class,'createDonationInterest'])->middleware('throttle:5,1');
Route::get('/jobs',[CareerController::class,'jobs']);Route::get('/jobs/{slug}',[CareerController::class,'jobBySlug']);
Route::post('/admin/login',[CareerController::class,'login'])->middleware('throttle:5,1');
Route::middleware(AdminTokenAuth::class)->prefix('admin')->group(function(){
 Route::get('/me',[CareerController::class,'me']);Route::post('/logout',[CareerController::class,'logout']);Route::get('/dashboard',[CareerController::class,'dashboard']);
 Route::get('/applications',[CareerController::class,'index']);Route::get('/applications/{id}',[CareerController::class,'show']);Route::patch('/applications/{id}',[CareerController::class,'update']);Route::delete('/applications/{id}',[CareerController::class,'deleteApplication']);Route::post('/applications/{id}/reply',[CareerController::class,'reply']);Route::get('/applications/{id}/documents/{kind}',[CareerController::class,'download']);
 Route::get('/jobs',[CareerController::class,'adminJobs']);Route::post('/jobs',[CareerController::class,'createJob']);Route::patch('/jobs/{id}',[CareerController::class,'updateJob']);Route::delete('/jobs/{id}',[CareerController::class,'deleteJob']);
 Route::get('/contacts',[CareerController::class,'contacts']);Route::get('/contacts/{id}',[CareerController::class,'showContact']);Route::patch('/contacts/{id}',[CareerController::class,'updateContact']);Route::delete('/contacts/{id}',[CareerController::class,'deleteContact']);Route::post('/contacts/{id}/reply',[CareerController::class,'replyContact']);
 Route::get('/admins',[CareerController::class,'admins']);Route::post('/admins',[CareerController::class,'createAdmin']);Route::patch('/admins/{id}',[CareerController::class,'updateAdmin']);Route::delete('/admins/{id}',[CareerController::class,'deleteAdmin']);
 Route::get('/donation-interests',[CareerController::class,'donationInterests']);Route::get('/donation-interests/{id}',[CareerController::class,'showDonationInterest']);Route::patch('/donation-interests/{id}',[CareerController::class,'updateDonationInterest']);Route::delete('/donation-interests/{id}',[CareerController::class,'deleteDonationInterest']);Route::post('/donation-interests/{id}/reply',[CareerController::class,'replyDonationInterest']);
});
