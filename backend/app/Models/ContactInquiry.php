<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class ContactInquiry extends Model{protected $guarded=[];protected $casts=['replied_at'=>'datetime'];public function replies(){return $this->hasMany(ContactReply::class);}public function assignee(){return $this->belongsTo(User::class,'assigned_to');}}
