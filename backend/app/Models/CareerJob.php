<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class CareerJob extends Model{protected $guarded=[];protected $casts=['is_open'=>'boolean'];public function applications(){return $this->hasMany(CareerApplication::class);}}
