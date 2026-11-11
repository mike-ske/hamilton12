<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class DonationInterest extends Model
{
    protected $guarded=[];
    protected $casts=['amount'=>'decimal:2','consent_at'=>'datetime'];
    public function replies(){return $this->hasMany(DonationInterestReply::class);}
}
