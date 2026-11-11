<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class CareerApplication extends Model { protected $guarded=[]; protected $casts=['consent_at'=>'datetime','submitted_at'=>'datetime']; public function job(){return $this->belongsTo(CareerJob::class,'career_job_id');} public function messages(){return $this->hasMany(CareerMessage::class);} public function activity(){return $this->hasMany(CareerActivity::class);} }
